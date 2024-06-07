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


export async function deleteCabin(id) {
    console.log(id);
    const { error } = await supabase.from('cabins').delete().eq('id', id);
    if (error) {
        console.log(error);
        throw new Error('Some error occured while deleting the cabin.');
    }
}

export default getCabins;