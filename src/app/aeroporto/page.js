'use client'

import Pagina from "@/componentes/Pagina"
import Link from "next/link"
import { Table } from "react-bootstrap"
import { FaPlusCircle } from "react-icons/fa";

export default function empresa() {

    const empresas = JSON.parse(localStorage.getItem('aeroporto')) || []

    return (
            <Pagina titulo="Aeroporto">

                <Link
                    href="/empresas/create"
                    className="btn btn-primary mb-3"
                >
                    < FaPlusCircle /> Novo
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
                        {empresas.map(item => (
                            <tr>
                                <td>1</td>
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
