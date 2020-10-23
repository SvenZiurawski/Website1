import React from 'react';

export default class Kontakt extends React.Component {

    render() {
        return (
            <form>
                <div>
                    <label htmlFor=""></label>
                    <input type="text" name="name" placeholder="Name:" />
                </div>
                <div>
                    <label htmlFor=""></label>
                    <input type="email" name="email" placeholder="E-Mail:" />
                </div>
                <div>
                    <label htmlFor=""></label>
                    <input type="telefonnummer" name="tel" placeholder="Telefonnummer (optional) " />
                </div>
                <div>
                    <label htmlFor=""></label>
                    <textarea rows="7" name="nachricht" placeholder="Wie können wir Ihnen Helfen" required></textarea><br></br>
                </div>
                <div>
                    <button type="submit">Jetzt abschicken!</button>
                    <button type="submit">Löschen</button>
                </div>
            </form>
        )
    }
}