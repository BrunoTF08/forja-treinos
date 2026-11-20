import React, { useState } from 'react';
import { ArrowRight, Dumbbell, Sparkles } from 'lucide-react';
import './start.css';

export default function StartScreen({ onStart }) {
  const [name, setName] = useState('');

  function submit(event) {
    event.preventDefault();
    const cleanName = name.trim();
    if (cleanName.length >= 2) onStart(cleanName);
  }

  return <main className="start-shell">
    <div className="start-brand"><span className="start-mark"><Dumbbell size={19}/></span> FORJA<span className="start-dot">.</span></div>
    <section className="start-card">
      <div className="start-emblem"><Sparkles size={22}/></div>
      <div className="start-kicker">SUA JORNADA COMEÇA AQUI</div>
      <h1>Vamos começar<br/><span>do zero.</span></h1>
      <p>Qual é o seu nome? Vamos preparar seu espaço de treino.</p>
      <form onSubmit={submit}>
        <label htmlFor="athlete-name">SEU NOME</label>
        <input id="athlete-name" autoComplete="given-name" autoFocus value={name} onChange={event=>setName(event.target.value)} placeholder="Digite seu nome" maxLength={32} minLength={2} required/>
        <button type="submit" disabled={name.trim().length<2}>Começar <ArrowRight size={17}/></button>
      </form>
      <div className="start-note">Nível 1 <i/> 0 XP <i/> perfil salvo neste dispositivo</div>
    </section>
  </main>;
}
