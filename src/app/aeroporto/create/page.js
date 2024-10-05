'use client'

import Pagina from "@/componentes/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";

export default function Page() {

    const route = useRouter()

    function salvar(dados){
        const empresas = JSON.parse(localStorage.getItem('empresas')) || []
        empresas.push(dados)
        localStorage.setItem('empresas', JSON.stringify(empresas))
        return route.push('/empresas')
    }

    return (
        <Pagina titulo="Empresa">

            <Formik
                initialValues={{nome: '', sigla: '', UF: '', cidade: '', pais: ''}}
                onSubmit={values=>salvar(values)}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                }) => (
                    <Form>
                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="nome" 
                                value={values.nome}
                                onChange={handleChange('nome')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="sigla">
                            <Form.Label>sigla</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="logo"
                                value={values.sigla}
                                onChange={handleChange('sigla')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="UF">
                            <Form.Label>UF</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="site"
                                value={values.UF}
                                onChange={handleChange('UF')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="cidade">
                            <Form.Label>cidade</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="site"
                                value={values.cidade}
                                onChange={handleChange('cidade')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="pais">
                            <Form.Label>pais</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="site"
                                value={values.pais}
                                onChange={handleChange('pais')}
                            />
                        </Form.Group>
                        <div className="text-center">
                            <Button onClick={handleSubmit} variant="success">
                                <FaCheck /> Salvar
                            </Button>
                            <Link
                                href="/empresas"
                                className="btn btn-danger ms-2"
                            >
                                <MdOutlineArrowBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </Pagina>
    )
}
