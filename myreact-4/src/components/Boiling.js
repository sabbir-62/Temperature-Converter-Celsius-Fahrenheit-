export default function Boiling({celsius = 0}){
    if(celsius >= 100){
        return <p>Water Would Boil</p>
    }
    else{
        return <p>Water Wouldn't Boil</p>
    }
}