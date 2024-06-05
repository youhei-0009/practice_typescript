export const Practice2 = () => {
    const getTotalFee = (num: number): number => {
        const total = num * 1.1;
        return total;
    }
    const onClickPractice = () => {
        getTotalFee(1000);
    }
    
    return (
        <div>
            <p>Practice: argument type specification</p>
            <button onClick={onClickPractice}>execute practice2</button>
        </div>
    );
};