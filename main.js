const alunos = [
    {nome: 'Marcos', nota: 10},
    {nome: 'Pedro', nota: 6},
    {nome: 'João', nota: 2},
    {nome: 'Luiz', nota: 7},
    {nome: 'Lucas', nota: 5}
]

function retornaAlunosAcimaMedia(arrayDeAlunos) {
    const alunosAcimaMedia = arrayDeAlunos.filter(aluno => aluno.nota >= 6)
    
    return alunosAcimaMedia;
}

console.log(retornaAlunosAcimaMedia(alunos));