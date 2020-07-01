let Parent = {
    name:'parent',
    share: [1,2,3],
    log:function () {
        return this.name
    }
}

let child = Object.create(Parent)
