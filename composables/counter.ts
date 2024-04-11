export const countNum = () => {
    const count = ref(0);
    const increment = () => {
        count.value += 1
    }
    const decrease = () =>{
        if(count.value > 0)count.value -= 1
    }
    return { 
        count , 
        increment,
        decrease
    }
}
