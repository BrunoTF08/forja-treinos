import React, { useEffect, useState } from 'react';
import { ArrowRight, Dumbbell, Eye, EyeOff, LockKeyhole, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import './auth.css';

export default function AuthScreen({ client }) {
  const [mode, setMode] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');

  const isSignUp = mode === 'signup';
  const isRecovery = mode === 'recovery';
  const title = isRecovery ? 'Recuperar acesso' : isSignUp ? 'Crie sua conta' : 'Bem-vindo de volta';
  useEffect(() => { window.scrollTo(0, 0); }, [mode]);

  async function submit(event) {
    event.preventDefault();
    setError('');
    setNotice('');
    if (!client) {
      setError('O login ainda precisa ser conectado ao serviço de autenticação do projeto.');
      return;
    }
    setBusy(true);
    try {
      if (isSignUp) {
        const { data, error: authError } = await client.auth.signUp({
          email: email.trim(),
          password,
          options: { data: { full_name: name.trim() } },
        });
        if (authError) throw authError;
        if (!data.session) setNotice('Conta criada. Confira seu e-mail para confirmar o cadastro e entrar.');
      } else if (isRecovery) {
        const { error: authError } = await client.auth.resetPasswordForEmail(email.trim(), {
          redirectTo: window.location.origin,
        });
        if (authError) throw authError;
        setNotice('Se existir uma conta para este e-mail, enviaremos as instruções de recuperação.');
      } else {
        const { error: authError } = await client.auth.signInWithPassword({ email: email.trim(), password });
        if (authError) throw authError;
      }
    } catch (authError) {
      setError(authError.message || 'Não foi possível concluir. Tente novamente.');
    } finally {
      setBusy(false);
    }
  }

  return <main className="auth-shell">
    <section className="auth-showcase">
      <div className="auth-brand"><span className="auth-brand-mark"><Dumbbell size={19}/></span> FORJA<span className="auth-brand-dot">.</span></div>
      <div className="auth-visual"><div className="auth-orbit auth-orbit-one"/><div className="auth-orbit auth-orbit-two"/><div className="auth-figure">✦</div><span className="auth-visual-tag">SUA JORNADA COMEÇA AQUI</span></div>
      <div className="auth-promise"><div className="auth-kicker"><Sparkles size={14}/> TREINE NO SEU RITMO</div><h1>Um treino.<br/>Um passo.<br/><span>Uma versão<br/>mais forte.</span></h1><p>Monte seu ritmo, acompanhe cada conquista e evolua do seu jeito.</p><div className="auth-security"><ShieldCheck size={15}/> Seus dados ficam vinculados à sua conta.</div></div>
    </section>
    <section className="auth-form-side"><div className="auth-card">
      <div className="auth-mobile-brand"><span className="auth-brand-mark"><Dumbbell size={18}/></span> FORJA<span className="auth-brand-dot">.</span></div>
      <div className="auth-overline">ÁREA DO ATLETA</div><h2>{title}<span>.</span></h2><p className="auth-intro">{isRecovery ? 'Vamos enviar um link para o seu e-mail.' : isSignUp ? 'Comece sua jornada com um perfil só seu.' : 'Entre para continuar sua evolução.'}</p>
      <form onSubmit={submit}>
        {isSignUp&&<label className="auth-field"><span>SEU NOME</span><div className="auth-input-wrap"><input autoComplete="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Como podemos te chamar?" required minLength={2}/></div></label>}
        <label className="auth-field"><span>E-MAIL</span><div className="auth-input-wrap"><Mail size={17}/><input type="email" autoComplete="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="voce@email.com" required/></div></label>
        {!isRecovery&&<label className="auth-field"><span>SENHA</span><div className="auth-input-wrap"><LockKeyhole size={17}/><input type={showPassword?'text':'password'} autoComplete={isSignUp?'new-password':'current-password'} value={password} onChange={e=>setPassword(e.target.value)} placeholder={isSignUp?'Mínimo de 8 caracteres':'Sua senha'} required minLength={8}/><button className="auth-eye" type="button" aria-label={showPassword?'Ocultar senha':'Mostrar senha'} onClick={()=>setShowPassword(v=>!v)}>{showPassword?<EyeOff size={17}/>:<Eye size={17}/>}</button></div></label>}
        {!isSignUp&&!isRecovery&&<button className="auth-forgot" type="button" onClick={()=>{setMode('recovery');setError('');setNotice('')}}>Esqueci minha senha</button>}
        {error&&<div role="alert" className="auth-message auth-error">{error}</div>}{notice&&<div role="status" className="auth-message auth-notice">{notice}</div>}
        <button className="auth-submit" disabled={busy||!client} type="submit">{busy?'Aguarde…':isRecovery?'Enviar link':isSignUp?'Criar conta':'Entrar'} <ArrowRight size={17}/></button>
      </form>
      {!client&&<div className="auth-setup-note">Conexão pendente: configure <code>VITE_SUPABASE_URL</code> e a chave publicável do projeto para ativar o login.</div>}
      <div className="auth-switch">{isRecovery?<><span>Lembrou a senha?</span> <button onClick={()=>setMode('login')}>Voltar para entrar</button></>:isSignUp?<><span>Já tem uma conta?</span> <button onClick={()=>setMode('login')}>Entrar</button></>:<><span>Primeira vez por aqui?</span> <button onClick={()=>setMode('signup')}>Criar conta</button></>}</div>
      <div className="auth-legal"><ShieldCheck size={14}/> Login protegido. Seus treinos ficam separados por conta.</div>
    </div></section>
  </main>;
}
