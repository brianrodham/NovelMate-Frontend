app.controller('WriterController', ['$scope', function ($scope) {
    $scope.content = ""; // Current chapter text

    function init() {


       /* CKEDITOR.replace('editor');
        var editor = CKEDITOR.instances['editor'];

        editor.resize($("#plotform").width(), $("#plotform").height());*/

        console.log("Alert");

        CKEDITOR.editorConfig = function (config) {
            config.language = 'es';
            config.uiColor = '#F7B42C';
            config.height = 300;
            config.toolbarCanCollapse = true;

            config.toolbarGroups = [
               { name: 'clipboard', groups: ['clipboard', 'undo'] },
               { name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
               { name: 'links' },
               { name: 'insert' },
               { name: 'tools' },
               { name: 'document', groups: ['mode', 'document', 'doctools'] },
               { name: 'others' },
               { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
               { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
               { name: 'styles' },
               { name: 'colors' },
               { name: 'about' }
            ];

        };

        CKEDITOR.replace('editor');

    }

    init();

}]);

/*(function () {
    var WriterController = function ($scope) {
        function init() {
            $(".writer-nav").css({ 'height': ($(".editor").height() + 'px') });

            $('.writer-nav').tinyscrollbar();

            CKEDITOR.replace('editor');
            var editor = CKEDITOR.instances['editor'];

            editor.resize($("#plotform").width(), $("#plotform").height());
        }

        init();

    };
    angular.module('novelmate').controller('WriterController', WriterController);
}());*/
