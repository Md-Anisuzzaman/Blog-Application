export const debounce = (fn) => {
    let timer;
    return function (...args) {
        const context = this;
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            timer = null
            fn.apply(context, args)
        },1500)

    }

};