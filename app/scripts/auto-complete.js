const url = 'https://zh.wikipedia.org/w/api.php?action=opensearch&format=json&limit=5&origin=*';

const getSuggestList = (keyword) => fetch(url + '&search=' + keyword, { method: 'GET', mode: 'cors' })
  .then(res => {
    return res.json();
  });

const searchInput = document.getElementById('search');
const suggestList = document.getElementById('suggest-list');

const keyword = Rx.Observable.fromEvent(searchInput, 'input');
const selectItem = Rx.Observable.fromEvent(suggestList, 'click');

const render = (suggestArr = []) => suggestList.innerHTML = suggestArr.map(item => '<li>' + item + '</li>').join('');

keyword
  .debounce(200)
  .switchMap(e => getSuggestList(e.target.value), (e, res) => res[1])
  .subscribe(list => render(list));

selectItem
  .filter(e => e.target.matches('li'))
  .map(e => e.target.innerHTML)
  .subscribe(text => {
    searchInput.value = text;
    render();
  });
