'use client';
export default function Contact() {
  async function handleSubmit(e: any) {
    e.preventDefault();
    const res = await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: e.currentTarget.name.value,
        email: e.currentTarget.email.value,
        message: e.currentTarget.message.value,
      }),
    });
    const result = await res.json();
    console.log(result);
  }
  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input disabled className="form-control" type="text" id="name" />
      <label htmlFor="email">Email</label>
      <input disabled className="form-control" type="email" id="email" />
      <label htmlFor="message">Message</label>
      <textarea disabled className="form-control" id="message" rows={10} />
      <button disabled className="btn-primary">
        Send
      </button>
    </form>
  );
}
