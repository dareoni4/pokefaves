import React from 'react';

/**
 * Display a character, both in search results
 * and user page.
 *
 * @param {Object} props            Component properties.
 * @param {Object} props.id         Character ID.
 * @param {Object} props.name       Character name.
 * @param {Object} props.thumb      Thumbnail image URL.
 * @param {Object} props.link       Link to more info.
 * @param {Object} props.comicsNum  Number of comics appeared in.
 * @param {Object} props.seriesNum  Number of series appeared in.
 * @param {Object} props.storiesNum Number of stories appeared in.
 */
const Character = props => {
    const { name, thumb, link, comicsNum, seriesNum, storiesNum } = props;

    const comics =
        storiesNum === 1 ? `${comicsNum} comic` : `${comicsNum} comics`;

    const stories =
        storiesNum === 1 ? `${storiesNum} story` : `${storiesNum} stories`;

    return (
        <li className="character">
            <span className="avatar">
                <img src={thumb} alt={name} />
            </span>
            <span className="info">
                <span className="name">{name}</span>
                <span className="meta">
                    Has appeared in {comics}, {stories}, and {storiesNum}{' '}
                    series.{' '}
                    {link && (
                        <a
                            href={link}
                            title={`Learn more about ${name}`}
                            target="_blank"
                        >
                            Learn More
                        </a>
                    )}
                </span>
            </span>
        </li>
    );
};

export default Character;