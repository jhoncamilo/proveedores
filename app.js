const {PrismaClient} = require ('@prisma/client')

const prisma = new PrismaClient()

async function main() {

    // CRUD PROVEEDORES_PRISMA 

    
    //CREAR UN REGISTRO
    /*const post = await prisma.proveedores.create({
        data: {
            Nombre: 'Jorge',
            Apellido: 'Daza',
        }
    })
    console.log(post)*/

    
    //CREAR VARIOS REGISTROS
    /*const post = await prisma.proveedores.createMany({
        data: [
            {Nombre:'Ale', Apellido:'Villa'},
            {Nombre:'Diana', Apellido:'Villa'},
            {Nombre:'Marcela', Apellido:'Daza'},
        ]
    })
    console.log(post)*/


    //MOSTRAR TODOS LOS REGISTROS
   /* const allpost= await prisma.proveedores.findMany ()
        console.log(allpost)*/


    //MOSTRAR UN SOLO REGISTRO
    /*const post = await prisma.proveedores.findUnique ({
        where :{
            id:8
        }
    })
    console.log(post)*/

    
    //ACTUALIZAR UN REGISTRO
    /*const updatePost = await prisma.proveedores.update({
        where:{
            id:5
        },
        data :{
            Nombre:'Patricia',
            Apellido:'Daza'
        }
   })
    console.log(updatePost)*/

    //ELIMINAR UN REGISTRO
    /*const deletePost = await prisma.proveedores.delete({
        where: {
            id:7
        }
    })
    console.log(deletePost)*/


}
main()
    .catch(  (e)=> {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })