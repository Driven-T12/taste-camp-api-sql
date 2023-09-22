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
        const receita = await db.query(
            `SELECT receitas.id, 
                receitas.titulo, 
                receitas.preparo, 
                receitas.ingredientes,
                categorias.nome AS categoria
            FROM receitas 
            JOIN categorias 
            ON receitas.id_categoria = categorias.id
            WHERE receitas.id = $1`,
            [id]
        );

        res.send(receita.rows[0]);

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