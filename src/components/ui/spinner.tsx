// adapted from https://codepen.io/martinvd/pen/xbQJom
const Spinner = () => {
    return (
        <div className='px-4 text-muted-foreground'>
            Please standby...
            <div class='spinner'>
                <div class='spin-arm one'></div>
                <div class='spin-arm two'></div>
                <div class='spin-arm three'></div>
            </div>
        </div>
    );
};

export default Spinner;
