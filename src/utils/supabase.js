import supabase from "../services/supabase"
async function data() {
    try {
        let { data: cabins, error } = await supabase.from('cabins').select('*');
        console.log(cabins);
        throw new Error(error);
    } catch (error) {
        console.log(error);
    }
}
export default data;