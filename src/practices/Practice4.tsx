export const Practice4 = () => {
    const calcTotalFee = (num: number) => {
        const total = num * 1.1;
        console.log(total);
    }
    const onClickPractice = () => {
        calcTotalFee(1000);
    }
    
    return (
        <div>
            <p>Practice: update tsconfig.json</p>
            <button onClick={onClickPractice}>execute practice4</button>
        </div>
    );
};