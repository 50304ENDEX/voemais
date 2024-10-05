'use client'

import Pagina from "@/componentes/Pagina"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { FaPlusCircle, FaRegEdit } from "react-icons/fa"
import { MdDelete } from "react-icons/md"

export default function page() {

    const [empresas, setEmpresas] = useState([])

    useEffect(() => {
        setEmpresas(JSON.parse(localStorage.getItem('empresas')) || [])
    }, [])

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const dados = empresas.filter(item => item.id != id)
            localStorage.setItem('empresas', JSON.stringify(dados))
            setEmpresas(dados)
        }
    }


    return (
        <Pagina titulo="Lista empresas">

            <Link
                href="/empresa/from"
                className="btn btn-primary mb-3"
            >
                <FaPlusCircle /> Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Logo</th>
                    </tr>
                </thead>
                <tbody>
                    {empresas.map((item, i) => (
                        <tr key={item.id}>
                            <td>
                                <Link href={`/empresa/from/${item.id}`}>
                                    <FaRegEdit title="Editar" className="text-primary" />
                                </Link>
                                <MdDelete
                                    title="Excluir"
                                    className="text-danger"
                                    onClick={() => excluir(item.id)}
                                />
                            </td>
                            <td>{item.nome}</td>
                            <td>
                                <a href={item.site} target="_blank">
                                    <img src={item.logo} width={100} />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </Pagina>
    )
}
