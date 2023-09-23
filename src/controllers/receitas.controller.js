import db from '../database/database.connection.js';

export async function createRecipe(req, res) {
    res.send("createRecipe");
}

export async function getRecipe(req, res) {
    
    try{

        const receitas = await db.query(`SELECT * FROM receitas;`);

        res.send(receitas.rows);

    }catch(err){
        res.status(500).send(err.message);
    }

}

export async function getRecipeById(req, res) {
    
    const { id } = req.params;

    try{
        const resposta = await db.query(
            `SELECT receitas.*, categorias.nome AS categoria
                FROM receitas
                JOIN receitas_categorias ON receitas.id = receitas_categorias.id_receita
                JOIN categorias ON categorias.id = receitas_categorias.id_categoria	
                WHERE receitas.id=$1;`,
            [id]
        );

        const receita = {
            ...resposta.rows[0],
            categorias: resposta.rows.map( re => re.categoria)
        }
        delete receita.categoria;

        res.send(receita);

        /*
        receita = {
            "id": 1,
            "titulo": "Ovo Frito",
            "ingredientes": "Ovo e óleo",
            "preparo": "Frite o Ovo",
            "categorias":["amador", "salgado", "fritura"]
        }
  */

    }catch(err){
        res.status(500).send(err.message);
    }
}

export async function deleteRecipe(req, res) {
    res.send("deleteRecipe");
}

export async function deleteRecipesByIngredients(req, res) {
    res.send("deleteRecipesByIngredients");
}

export async function editRecipe(req, res) {
    res.send("editRecipe");
}

export async function editRecipesByIngridients(req, res) {
    res.send("editRecipesByIngridients");
}