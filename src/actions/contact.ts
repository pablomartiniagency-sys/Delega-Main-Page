'use server';

export async function submitContactForm(data: { email: string; workers: string; tasks: string; about: string }) {
    try {
        // Validate inputs
        if (!data.email || !data.email.includes('@')) {
            return { error: 'Correo electrónico no válido.' };
        }

        // Webhook integration logic (n8n or Zapier)
        const webhookUrl = process.env.N8N_WEBHOOK_URL;
        
        if (webhookUrl) {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                console.error("Webhook submission failed:", await response.text());
                return { error: 'Ocurrió un error al enviar tu solicitud. Inténtalo de nuevo.' };
            }
        } else {
            // Simulate network latency for demo purposes
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Contacto recibido (Webhook no configurado):', data);
        }

        return { success: true };
    } catch (e) {
        console.error(e);
        return { error: 'Fallo interno del servidor. Inténtalo de nuevo más tarde.' };
    }
}
