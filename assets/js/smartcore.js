SmartCore = {
	main : function () {
		SmartCore.ajax.setup ();
		SmartCore.core.init ();
	},
	core : {
		globals : {},
		init : function () {

		}
	},
	ajax : {
		setup : function () {
			var url = '//' + document.domain + '/packages/Controllers/Ajax/index.php';
			$.ajaxSetup({
				url: url,
				type: 'POST',
				timeout: 5000
			});
		},
		run : function (file, args, func) {
			var success_func, myData, sArgs = '';
			if (func === undefined)
				success_func = function (data, textStatus, jqXHR) {SmartCore.globals.ajaxContents = data};
			else
				success_func = func;
			for (arg in args)
				sArgs +=  '&'+ arg + '=' + encodeURIComponent(args [arg]);
			myData = "f=" + file + sArgs;
			$.ajax({
				data: myData,
				success: success_func
			});
		}
	}
};