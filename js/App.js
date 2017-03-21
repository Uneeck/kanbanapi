var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
	'X-Client-Id': '1642',
	'X-Auth-Token': '4ad2aa1863f33d6cb526f595ddd617f9'
};

$.ajaxSetup({
	headers: myHeaders
});

$.ajax({
	url: baseUrl + '/board',
	method: 'GET',
	success: function(response) {
		setupColumns(response.columns);
	}
});

function setupColumns(columns) {
	columns.forEach(function (column){
		var col = new Column(column.id, column.name);
		board.createColumn(col);
	});
}

function setupCards(col, cards) {
	cards.forEach(function (card){
		var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
		col.createCard(card);
	});
}