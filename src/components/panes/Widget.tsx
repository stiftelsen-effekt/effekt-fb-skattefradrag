export interface Widget {
    state: {
        paneNumber: number,
        setPaneNumber: Function,
        donorName: string,
        setDonorName: Function,
        email: string,
        setEmail: Function,
        SSN: string,
        setSSN: Function,
        method: string,
        setMethod: Function,
        taxDeduction: boolean,
        setTaxDeduction: Function
      },
      prevPane: Function,
      nextPane: Function,
      prevButton: Function,
      nextButton: Function
}