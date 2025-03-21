const Event = require('../model/event.model');

exports.dataset = async () => {
    const newEvent = [];

    const events = [
        { title: 'Concert Coldplay', lieu: 'Paris, France', date: new Date('2025-06-15'), createdAt: new Date(), updatedAt: new Date() },
        { title: 'Conférence Tech', lieu: 'San Francisco, USA', date: new Date('2025-09-10'), createdAt: new Date(), updatedAt: new Date() },
        { title: 'Match de Football', lieu: 'Madrid, Espagne', date: new Date('2025-04-22'), createdAt: new Date(), updatedAt: new Date() },
        { title: 'Salon de l’Auto', lieu: 'Genève, Suisse', date: new Date('2025-03-05'), createdAt: new Date(), updatedAt: new Date() },
        { title: 'Festival de Cannes', lieu: 'Cannes, France', date: new Date('2025-05-14'), createdAt: new Date(), updatedAt: new Date() },
        { title: 'Marathon de New York', lieu: 'New York, USA', date: new Date('2025-11-03'), createdAt: new Date(), updatedAt: new Date() },
        { title: 'Opéra La Traviata', lieu: 'Milan, Italie', date: new Date('2025-07-20'), createdAt: new Date(), updatedAt: new Date() },
        { title: 'Exposition Van Gogh', lieu: 'Amsterdam, Pays-Bas', date: new Date('2025-08-12'), createdAt: new Date(), updatedAt: new Date() },
        { title: 'Conférence IA', lieu: 'Berlin, Allemagne', date: new Date('2025-10-25'), createdAt: new Date(), updatedAt: new Date() },
        { title: 'Tournoi d’échecs', lieu: 'Londres, Royaume-Uni', date: new Date('2025-12-01'), createdAt: new Date(), updatedAt: new Date() }
    ];
    
    events.forEach(e => {
        newEvent.push({
            title: e.title,
            lieu: e.lieu,
            date: e.date
        })
    });

    await Event.bulkCreate(newEvent);
}