import { useEffect, useState } from 'react'
import { supabase } from './supabase'

type Message = {
  id: number
  created_at: string
  name: string
  message: string
}

export default function App() {
  const [messages, setMessages] = useState<Message[]>([])
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  // Load all messages when the page first opens
  useEffect(() => {
    supabase
      .from('messages')
      .select('*')
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        if (data) setMessages(data as Message[])
      })
  }, [])

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !text.trim()) return
    setLoading(true)
    const { data, error } = await supabase
      .from('messages')
      .insert({ name, message: text })
      .select()
      .single()
    setLoading(false)
    if (error) {
      alert(error.message)
      return
    }
    if (data) setMessages([data as Message, ...messages])
    setName('')
    setText('')
  }

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>Guestbook</h1>
      <form onSubmit={submit} style={{ display: 'grid', gap: 8, marginBottom: 24 }}>
        <input
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <textarea
          placeholder="Leave a message"
          value={text}
          onChange={e => setText(e.target.value)}
          rows={3}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Saving…' : 'Sign'}
        </button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {messages.map(m => (
          <li key={m.id} style={{ borderTop: '1px solid #ccc', padding: '12px 0' }}>
            <strong>{m.name}</strong>
            <div>{m.message}</div>
            <small>{new Date(m.created_at).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}