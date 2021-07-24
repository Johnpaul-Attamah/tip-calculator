// variables
const billInput = document.querySelector('#bill-input');
const sizeInput = document.querySelector('#num-of-people');
const btns = document.querySelectorAll('.rate');
const custom = document.querySelector('#custom-input');
const tipAmount = document.querySelector('#tipAmt');
const totalAmount = document.querySelector('#totalAmt');
const errorMessage = document.querySelector('.error-message');
const reset = document.querySelector('.reset-btn');
const btnGroup = document.querySelector('.submit-ends');
let rate = 0;


/**
 * @desc: Tip calculator class
 * 
 */
class TipCalculator {
    /**
     * 
     * @param {(Number) the bill input} bill 
     * @param {(Number) Total Number of people} size 
     */
    constructor(bill, size) {
        this.bill = bill;
        this.size = size;
        this.tipAmt = 0;
        this.totalAmt = 0;
        this.status = "success";
    }

    validateBill() {
        if(isNaN(this.bill) || !this.bill) {
            this.bill = 0;
        } else {
            return this.bill;
        }
        return this.bill;
    }

    validateSize() {
        if(this.size <= 0) {
            this.status = "failed";
            return false;
        }
        return true;
    }

    getTotalRate(value) {
        this.validateBill();
        return (value / 100) * this.bill;
    }

    calculateTipAmt(rate) {
        this.validateSize()
        if(this.status === 'success') {
            let totalRate = this.getTotalRate(rate);
            this.tipAmt = totalRate / this.size;
    
            return this.tipAmt.toFixed(2);
        }
        return 0;
    }

    calculateTotalAmt(rate) {
        this.validateSize()
        if (this.status === 'success') {
            this.validateBill();
            
            let totalRate = this.getTotalRate(rate);
            let grandTotal = totalRate + this.bill;
            let subTotal = grandTotal / this.size;
    
            return subTotal.toFixed(2);
        }
        return 0;
    }

}

//reset output
reset.addEventListener('click', (e) => {
    e.preventDefault();
    tipAmount.textContent = '$0.00';
    totalAmount.textContent = '$0.00';
    sizeInput.value = 0;
    billInput.value = '';
})

//custom input
custom.addEventListener('keydown', (e) => {
    //use Enter key to compute value
    if(e.keyCode === 13) {
        //calculate tip amounts and total amounts
        let tipCalculator = new TipCalculator(+billInput.value, +sizeInput.value);
        rate = +custom.value;
        if(rate <= 0) rate = 0;

        tipAmount.textContent = `$${tipCalculator.calculateTipAmt(rate)}`;
        totalAmount.textContent = `$${tipCalculator.calculateTotalAmt(rate)}`;
        
        //Check if size is zero (0)
        if(tipCalculator.status === 'failed') {
            addClass(sizeInput, 'error');
            addClass(errorMessage, 'visible-error')
        } else {
            removeClass(sizeInput, 'error');
            removeClass(errorMessage, 'visible-error');
        }
        
    }
})

// get clicked button text content and convert to integer then store in rate variable 
for(let btn of btns) {
    btn.addEventListener('click', (e) => {
        //add active class
        if(btnGroup.querySelector('.active')) btnGroup.querySelector('.active').classList.remove('active');
        btn.classList.add('active');

        //calculate tip amounts and tip totals
        let tipCalculator = new TipCalculator(+billInput.value, +sizeInput.value);
        e.preventDefault();
        rate = computeRates(btn.textContent);
        tipAmount.textContent = `$${tipCalculator.calculateTipAmt(rate)}`;
        totalAmount.textContent = `$${tipCalculator.calculateTotalAmt(rate)}`;

        //check if size is zero (0)
        if(tipCalculator.status === 'failed') {
            addClass(sizeInput, 'error');
            addClass(errorMessage, 'visible-error')
        } else {
            removeClass(sizeInput, 'error');
            removeClass(errorMessage, 'visible-error');
        }
    })
}

function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    if(element.classList.contains(className)) {
        element.classList.remove(className);
    }
}

/**
 * @desc converts button text content to integer
 * @param {string} rate 
 * @returns integer
 */

function computeRates(rate) {
    let rateStr = rate.replace('%', '');
    return +rateStr;

}

