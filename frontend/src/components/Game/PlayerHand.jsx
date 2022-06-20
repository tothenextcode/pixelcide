import Card from "./Card";

import { playable } from "../../helpers/player-helpers";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const PlayerHand = (props) => {
  const { playerHand, status, moveCardTo, playOn } = props;

  const playerHandList = playerHand.map((card) => (
    <motion.div
      layout
      exit={{ y: -250, x: 0 }}
      transition={{ ease: "easeIn", duration: 0.4 }}
      whileHover={{
        y: playable(card, playerHand) && -20,
        transition: { duration: 0 },
        x: playable(card, playerHand) && -70,
      }}
      key={card.id}
      onClick={() =>
        moveCardTo(card, "Field", playable(card, playerHand), playOn)
      }
      className={
        (status === "player_attack" && playable(card, playerHand)) ||
        status === "boss_attack"
          ? "player-card highlight nes-pointer"
          : "player-card dull"
      }
    >
      <Card image={card.image_front} />
    </motion.div>
  ));

  return (
    <motion.div className="cards-container">
      <LayoutGroup>
        <AnimatePresence>{playerHandList}</AnimatePresence>
      </LayoutGroup>
    </motion.div>
  );
};

export default PlayerHand;
