'use strict';

const URL = 'http://dselkirk.getsandbox.com/users';

let fetchUsers = (function() {
	function fetchUsers() {
		let users = sessionStorage.getItem('users');

		if (users) {
			return JSON.parse(users);
		}

		fetch(URL)
			.then(response => {
				return response.json();
			})
			.then(data => {
				sessionStorage.setItem('users', JSON.stringify(data));
				console.log(data);
				return data;
			});
	}
})();