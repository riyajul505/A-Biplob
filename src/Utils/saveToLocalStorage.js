import { toast } from "react-toastify";

export const saveToLocalStorage = (data, KeyName) => {
    const savedData = JSON.parse(localStorage.getItem(`${KeyName}`)) || [];

    const checkExisting = savedData.find(item => item.book_id == data.book_id);

    if (!checkExisting){
        toast.success(`Added to ${KeyName}`)
        savedData.push(data);
        localStorage.setItem(`${KeyName}`,JSON.stringify(savedData));
    }
    else{
        toast.warning('Data Already Saved');
    }
}