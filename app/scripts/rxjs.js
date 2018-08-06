class Producer {
  constructor() {
    this.listeners = [];
  }

  addListener(listener) {
    if (typeof listener === 'function') {
      this.listeners.push(listener);
    } else {
      throw new Error('listener 必須是 function');
    }
  }

  removeListener(listener) {
    this.listeners.splice(this.listeners.indexOf(listener), 1);
  }

  notify(message) {
    this.listeners.forEach(listener => {
      listener(message);
    });
  }
}


var egghead = new Producer();

// new 出一個 Producer 實例叫 egghead

function listener1(message) {
  console.log(message + 'from listener1');
}

function listener2(message) {
  console.log(message + 'from listener2');
}

egghead.addListener(listener1); // 註冊監聽
egghead.addListener(listener2);

egghead.notify('A new course!!'); // 當某件事情方法時，執行


let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();


class Add {
  @log
  add(a, b) {
    return a + b;
  }
}

function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function () {
    console.log(`Calling ${name} with`, arguments);
    return oldValue.apply(this, arguments);
  };

  return descriptor;
}

const math = new Add();

// passed parameters should get logged now
math.add(2, 4);
