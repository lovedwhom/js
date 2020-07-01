
//获取dom对象
var $ = function(id) {
    return typeof id === 'string' ? document.getElementById(id) : id;
};

// 弹窗构造函数

var Modal = function (id,html) {
    this.html =html;
    this.id = id;
    this.open = false;
}

Modal.prototype.create = function () {
    if(!this.open){
        var modal = document.createElement('div');
        modal.innerHTML = this.html;
        modal.id = this.id;
        document.body.appendChild(modal)
        setTimeout(function () {
            modal.classList.add('show')
        })
        this.open = true;
    }
}
Modal.prototype.delete = function () {
    if(this.open){
        var modal = $(this.id);
        modal.classList.add('hide');
        setTimeout(function () {
            document.body.removeChild(modal)
        },200)
        this.open = false;
    }
}

var createIntance = (function () {
    var instance;
    return function () {
        return instance || (instance = new Modal('modal','这是一个弹框'))
    }
})()

var operate  = {
    setModal:null,
    open:function () {
        this.setModal = createIntance()
        this.setModal.create()
    },
    delete:function () {
        this.setModal ? this.setModal.delete() :''
    }
}
console.log()
$('open').onclick = function() {
    operate.open();
};

$('delete').onclick = function() {
    operate.delete();
};
