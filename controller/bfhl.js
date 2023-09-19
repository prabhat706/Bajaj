export const bfhlPost = async (req, res) => {
    const { data } = req.body
    const alphabetString = "ABCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let highest_aplhabet = []
    let numbers = []
    let alphabets = []
    let sortedAlphabets = []
    data.forEach(element => {
        if(alphabetString.includes(element)){
            alphabets.push(element)
            sortedAlphabets.push(element)
        }else{
            numbers.push(element)
        }
    });
    sortedAlphabets.sort((a,b) => {
        return b.toUpperCase().charCodeAt(0) - a.toUpperCase().charCodeAt(0)
    })
    if(sortedAlphabets.length > 0)
    highest_aplhabet.push(sortedAlphabets[0])
    const response = {
        "is_success": true,
        "user_id": "prabhat_kumar_mishra_07062002",
        "email":"prabhat.kumar2020@vitbhopal.ac.in",
        "roll_number": "20BCE10860",
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_aplhabet": highest_aplhabet
    }
    return res.status(200).json(response)
}

export const bfhlGet = async (req, res) => {
    return res.status(200).json({
        "operation_code": 1
    })
}