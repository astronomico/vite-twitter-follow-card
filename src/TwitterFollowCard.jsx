/* eslint-disable react/prop-types */
// import React from "react";

import { useState } from "react";
import "./TwitterFollowCard.css";

export default function TwitterFollowCard({
  username,
  name,
  initialIsFollowing,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const formattedUsername = `@${username}`;
  const avatarSrc = `https://unavatar.io/${username}`;

  const setLike = () => {
    setIsFollowing(!isFollowing);
  };

  const followStatus = isFollowing ? "Siguiendo" : "Seguir";
  const followButtonStyle = isFollowing
    ? "tw-follow-card-info-button tw-follow-is-following"
    : "tw-follow-card-info-button";

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
        <button className={followButtonStyle} onClick={setLike}>
          <span className="tw-follow-card-follow-status">{followStatus}</span>
        </button>
      </aside>
    </article>
  );
}
