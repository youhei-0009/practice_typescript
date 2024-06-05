export const Practice1 = () => {
    const calcTotalFee = (num: number) => {
        const total = num * 1.1;
        console.log(total);
    }
    const onClickPractice = () => {
        calcTotalFee(1000);
    }
    
    return (
        <div>
            <p>Practice: argument type specification</p>
            <button onClick={onClickPractice}>execute practice1</button>
        </div>
    );
};