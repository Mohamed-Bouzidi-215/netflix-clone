// == Import
import React from 'react';
import './Banner.css';

// == Composant
function Banner() {
  return (
    <header
        className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://t4.ftcdn.net/jpg/04/30/78/71/360_F_430787191_PUREgjGnYQY5G2myi3PTgyZ4rm1XfqEu.jpg")`,
            backgroundPosition: "center center",
    }}>
        <div className="banner__contents">
            <h1 className="banner__title">Movie Name</h1>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            <h1 className="banner__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo consectetur maiores perspiciatis, quas quaerat mollitia minus repellendus quos corporis optio dicta alias vitae maxime, accusantium laudantium. Impedit sequi ducimus voluptas. Doloremque delectus voluptatem quasi reprehenderit eligendi, enim accusamus. Nostrum voluptate sequi accusantium quibusdam itaque dolorem cumque voluptatem odit maxime soluta quas provident ipsam praesentium, facere nulla qui quo esse recusandae a architecto maiores veritatis doloribus! Cumque molestias incidunt ipsam nulla repudiandae deserunt consequuntur veritatis aspernatur, optio adipisci recusandae perferendis culpa tenetur quo et eaque voluptas laborum, exercitationem unde nisi? Quidem explicabo nisi illo aspernatur numquam. Cupiditate excepturi, neque molestiae molestias, tenetur fugiat debitis ad, nobis saepe ipsum totam! Molestiae autem quisquam ducimus facere culpa laboriosam veritatis maxime sapiente eaque eum voluptatibus debitis unde omnis dolore, voluptatum accusamus ipsum illo ipsa placeat provident voluptate quibusdam in. Veniam rem esse corporis nostrum blanditiis omnis rerum odit repellendus voluptatem maiores quas facilis quia velit, quidem placeat explicabo dolores possimus nemo eos iusto suscipit et. Officia numquam provident quis, aliquid omnis ullam. Amet molestiae cumque vero eius nihil aliquid nostrum similique. Dicta adipisci, magni nobis odio necessitatibus aspernatur quibusdam? Sapiente, laborum? Quam, quis. Dolores quas beatae animi, deserunt hic dolor reprehenderit! Rem fuga doloribus ullam cum voluptatem quasi dolore! Quos delectus, at hic laboriosam officiis vel mollitia praesentium voluptates placeat alias similique laudantium explicabo. Autem placeat mollitia possimus beatae corrupti modi doloremque culpa obcaecati pariatur, provident harum facilis nobis repudiandae explicabo ducimus cupiditate iure soluta. Maxime placeat omnis perspiciatis assumenda, quas facilis! Placeat eveniet assumenda qui temporibus sed nihil voluptate magni eligendi reiciendis quos! Sunt ab vero, nulla optio exercitationem aliquid a minus repellendus assumenda expedita, mollitia sint voluptatum accusantium non corrupti dolores quam perspiciatis. Vero, alias nam ipsa nulla corrupti eaque illo, aliquid nihil harum iste soluta possimus maxime sit provident, ut incidunt!</h1>
        </div>

        <div className="banner--fadeBottom" />
      
    </header>
  );
}

// == Export
export default Banner;
