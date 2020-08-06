import React, { useState, FormEvent } from 'react';
import {useHistory} from 'react-router-dom'

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';
import api from '../../services/api';

import './styles.css'
import TextArea from '../../components/TextArea';


function TeacherForm() {

    const history = useHistory()

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItem] = useState([
        { week_day: '', from: '', to: ' ' }
    ])

    function addNewScheduleItem() {
        setScheduleItem([
            ...scheduleItems,
            { week_day: '1', from: '', to: ' ' }
        ]);
    }

    function setScheduleValue(position: number, field: string, value: string) {
        const newSchedule = scheduleItems.map((scheduleItems, index) => {
            if (index === position) {
                return {
                    ...scheduleItems,
                    [field]: value
                }
            }
            return scheduleItems;
        });
        setScheduleItem(newSchedule);
    }

    function handleCreateClass(e: FormEvent) {

        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(()=> {
            alert('Cadastro realizado com sucesso!')
            history.push('/');
        }).catch(()=>{
            alert('Erro no cadastro')
        })
    }

    return (
        <div id="page-teacher-form"
            className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                subtitle="O primeiro passo, é preencher esse formulário de inscrição."
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input
                            name="name"
                            label="Nome completo"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={e => setAvatar(e.target.value)}
                        />
                        <Input
                            name="whatsapp"
                            label="Whatsapp"
                            value={whatsapp}
                            onChange={e => setWhatsapp(e.target.value)}
                        />
                        <TextArea
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={e => setBio(e.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select
                            name="subject"
                            label="Matéria"
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Ciências', label: 'Ciências' },
                                { value: 'Educação Física', label: 'Educação Física' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'História', label: 'História' },
                                { value: 'Inglês', label: 'Inglês' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Música', label: 'Música' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Química', label: 'Química' },
                            ]}
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                        />
                        <Input
                            name="cost"
                            label="Custo da hora por aula"
                            value={cost}
                            onChange={e => setCost(e.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários Disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                                + Novo Horário
                        </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => (
                            <div key={index}
                                className="schedule-item">
                                <Select
                                    name="weekDay"
                                    label="Dia da Semana"
                                    options={[
                                        { value: '1', label: 'Segunda' },
                                        { value: '2', label: 'Terça' },
                                        { value: '3', label: 'Quarta' },
                                        { value: '4', label: 'Quinta' },
                                        { value: '5', label: 'Sexta' },
                                        { value: '6', label: 'Sábado' },
                                        { value: '7', label: 'Domingo' },
                                    ]}
                                    value={scheduleItem.week_day}
                                    onChange={e => setScheduleValue(index, 'week_day', e.target.value)}
                                />
                                <Input
                                    name="from"
                                    label="Das"
                                    type="time"
                                    value={scheduleItem.from}
                                    onChange={e => setScheduleValue(index, 'from', e.target.value)}
                                />
                                <Input
                                    name="to"
                                    label="Até" 
                                    type="time"
                                    value={scheduleItem.to}
                                    onChange={e => setScheduleValue(index, 'to', e.target.value)}
                                />
                            </div>
                        ))}

                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                        Importante1 <br />
                        Preencha todos os dias
                    </p>
                        <button type="submit">Salvar cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;