$(function () {

    var Model = function(conf) {
        var model = function() {};

        model.obj = {
            "nome": "",
            "cognome": ""
        };

        model.data = function() {
            if (arguments.length < 1) {
                return model.obj;
            }

            for (var key in arguments[0]) {
                if (arguments[0].hasOwnProperty(key) && typeof model.obj[key] !== "undefined") {
                    model.obj[key] = arguments[0][key];
                }
            }
            return model.obj;
        };
        return model;
    };

    var DatatableController = function (conf) {
        var ctr = function () {
        };

        if (typeof conf.selector === 'undefined') {
            console.error("Configuration error: Selector not passed in config.");
            return;
        }

        ctr.$element = $(conf.selector);
        ctr.$dtable = null;

        ctr.config = function () {
            return {
                columns: [
                    {
                        "data": "nome"
                    },
                    {
                        "data": "cognome"
                    },
                    {
                        "render": function (data, index) {
                            return '<span class="row-edit btn" id="dtable-row-' + index + '">edit</span>'
                            + '&nbsp;<span class="row-delete btn" style="font-weight: bold; color: red; font-size: 24px;">&times;</span>';
                        }
                    }
                ]
            };
        };

        ctr.init = function (overrides) {
            ctr.$dtable = ctr.$element.DataTable(ctr.config());
        };

        ctr.addRow = function(data) {
            var r = ctr.$dtable.rows.add([data]).draw();

        };

        ctr.updateRow = function(data, row) {
            ctr.$dtable.row(row).data(data).draw();
        };

        ctr.deleteRow = function(row) {
            ctr.$dtable.row(row).remove().draw();
        };

        ctr.getRowModel = function(row) {
            return ctr.$dtable.row(row).data();
        };

        return ctr;
    };

    var DialogController = function (conf) {
        var ctr = function () {
        };

        ctr.$element = $(conf.selector);
        ctr.$dialog = null;
        ctr.isEditing = false;
        ctr.currentIndex = null;

        ctr.config = function () {
            return {
                autoOpen: false,
                modal: true,
                buttons: [{
                    text: 'Aggiungi',
                    click: function () {
                        if (ctr.isEditing) {
                            pageController.datatableController.updateRow(ctr.getValue(), ctr.currentIndex);

                        } else {

                            pageController.addToTable(ctr.getValue());
                        }
                        ctr.$element.dialog('close');

                        ctr.isEditing = false;
                    }
                }]
            }
        };

        ctr.init = function () {
            ctr.$dialog = ctr.$element.dialog(ctr.config());
        };

        ctr.edit = function(data) {
            ctr.isEditing = true;

            $('#field1').val(data.nome);
            $('#field2').val(data.cognome);

            ctr.currentIndex = data.index;

            ctr.$element.dialog('open');
        };

        ctr.open = function () {
            ctr.$element.dialog('open');
        };

        ctr.getValue = function () {
            var f1 = $('#field1').val();
            var f2 = $('#field2').val();
            return {
                nome: f1,
                cognome: f2
            };
        };

        return ctr;
    };

    var PageController = function (conf) {
        var ctr = function() {};

        ctr.models = [];

        ctr.datatableController = DatatableController({
            selector: '#table-test',
            model: ctr.model
        });

        ctr.dialogController = DialogController({
            selector: '#sub',
            model: ctr.model
        });

        ctr.init = function () {
            ctr.datatableController.init();

            ctr.dialogController.init();

            ctr.addListeners();
        };

        ctr.addListeners = function() {
            $(conf.addElementSelector).on('click', ctr.addElementToTable);
            $(ctr.datatableController.selector).on('click', '.row-edit',  ctr.m);
            $(ctr.datatableController.selector).on('click', '.row-delete', ctr.del);
            $('#delete-element').on('click', ctr.deleteElement);
            $('#open-dialog').on('click', ctr.openDialog);
        };

        ctr.addElementToTable = function() {
            ctr.dialogController.open();
        };

        ctr.addToTable = function(value) {
            ctr.datatableController.addRow({
                nome: value.nome,
                cognome: value.cognome
            });
        };

        ctr.m = function(event) {
            var tr = $(this).closest('tr');
            var rowModel = ctr.datatableController.getRowModel($(tr));
            console.log(rowModel);
            rowModel["index"] = $(tr).index();
            ctr.dialogController.edit(rowModel);
        };

        ctr.deleteElement = function() {
            ctr.datatableController.deleteRow(1);
        };

        ctr.del = function() {
            var row = $(this).closest('tr');
            var nRow = row[0];
            ctr.datatableController.deleteRow(nRow);
        };

        ctr.openDialog = function() {
            ctr.dialogController.open();
        };

        return ctr;
    };


    var pageController = window.pageController = PageController({
        addElementSelector: '#add-new-element'
    });

    pageController.init();

    // $('#test3').DataTable({
    //   columns: [
    //     {"data": "campo"},
    //     {
    //       "render": function (data) {
    //         return '<span class="row-edit">edit</span>&nbsp;<span class="row-delete" style="font-weight: bold; color: red; font-size: 24px;">&times;</span>';
    //       }
    //     }
    //   ]
    // });
    //
    // // AGGIORNA RIGA
    // $('#test3 tbody').on('click', '.row-edit', function () {
    //   var row = $(this).closest('tr');
    //   function2(row);
    //   var rowData = $('#test3').DataTable().row(row[0]).data();
    //   $('#field1').val(rowData.campo);
    //   $('#sub').dialog('open');
    // });
    //
    // // ELIMINA RIGA
    // $('#test3 tbody').on('click', '.row-delete', function () {
    //   var row = $(this).closest('tr');
    //   var nRow = row[0];
    //   $('#test3').DataTable().row(nRow).remove().draw();
    // });
    //
    // // OTTIENI DATI
    // $('#get_data').click(function () {
    //   var data = $('#test3').DataTable().rows().data().toArray();
    //   var json = JSON.stringify(data);
    //   console.log(json);
    // });
    //
    // $("#sub").dialog({
    //   width: 650,
    //   height: 225,
    //   maxHeight: 225,
    //   autoOpen: false,
    //   modal: true,
    //   draggable: false,
    //   buttons: {
    //     "Annulla": function () {
    //     },
    //     "Procedi": function function2(val) {
    //       var test = val;
    //       console.log(test);
    //       var valore = $('#field1').val();
    //       var table = $('#test3').DataTable();
    //       var obj = {};
    //       obj.campo = valore;
    //       console.log(obj);
    //       var actual_data = table.rows().data().toArray();
    //       var found = false;
    //       for (var count = 0; count < actual_data.length; count++) {
    //         var element = actual_data[count];
    //         /*if(element.campo !== undefined && element.campo == valore) {
    //             found = true;
    //         }*/
    //         table.rows().every(function (rowIdx, tableLoop, rowLoop) {
    //           var row = this.node();
    //           var prova = $(row).find('tr');
    //           console.log(prova);
    //           console.log(element);
    //         });
    //       }
    //       if (found) {
    //         console.log('Elemento ' + valore + ' presente!!!!');
    //         table.row([0]).data(obj).draw();
    //       } else {
    //         table.row.add(obj).draw();
    //         $(this).dialog("close");
    //       }
    //     }
    //   }
    // });
    // $("#conf").on("click", function () {
    //   $("#sub").dialog("open");
    // });
    //


});
