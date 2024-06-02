import supabase from './supabase'
async function getCabins() {
    try {
        let { data: cabins, error } = await supabase.from("cabins").select("*");
        if (error) {
            console.log(error);
            throw new Error('Cabins could not be loaded !');
        }
        return cabins;
    } catch (error) {
        console.log(error);
    }
}


export default getCabins;