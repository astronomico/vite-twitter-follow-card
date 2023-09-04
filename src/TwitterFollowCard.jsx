/* eslint-disable react/prop-types */
// import React from "react";
import "./TwitterFollowCard.css";

export default function TwitterFollowCard({ username, name, isFollowing }) {
  const formattedUsername = `@${username}`;
  const avatarSrc = `https://unavatar.io/${username}`;

  const setLike = (e) => {
    e.preventDefault();
    console.log(e.active);
  };

  return (
    <article className="tw-follow-card">
      <header className="tw-follow-card-header">
        <img
          className="tw-follow-card-avatar"
          src={avatarSrc}
          alt={`El avatar de ${username}`}
        />
        <div className="tw-follow-card-info">
          <strong>{name}</strong>
          <span className="tw-follow-card-info-username">
            {formattedUsername}
          </span>
        </div>
      </header>

      <aside>
        <button className="tw-follow-card-info-button" onClick={setLike}>
          {isFollowing ? "Dejar de seguir" : "Seguir"}
        </button>
      </aside>
    </article>
  );
}
