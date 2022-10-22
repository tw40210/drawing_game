label_set = [
    'dog', 'cat', 'frog', 'frogspawn', 'newt', 'tadpole', 'toad', 'albatross', 'biddy', 'blackbird', 'canary', 'crow',
    'cuckoo', 'dove,', 'pigeon', 'duck', 'eagle', 'falcon', 'finch', 'flamingo', 'goose', 'gull', 'hawk', 'jackdaw',
    'jay', 'kestrel', 'kookaburra', 'mallard', 'nightingale', 'nuthatch', 'ostrich', 'owl'
]


class Player:
    def __init__(self, name, id):
        self.data = {
            "score": 0,
            "name": name,
            "id": id
        }


class PicGame:
    def __init__(self, players, label_per_pic=2):
        self.data = {
            "players": [],
            "player_tags": {},
            "pics": [],
            "round": 0
        }

        self.waiting_list = []
        self.label_per_pic = label_per_pic
        self._set_game_start(players)

    def _set_game_start(self, players):
        sub_label_set = label_set[:len(players) * self.label_per_pic]

        for idx, player in enumerate(players):
            tags = []
            for i in range(self.label_per_pic):
                tags.append(sub_label_set.pop())
            player_data = Player(name=player, id=idx).data
            self.data["players"].append(player_data)
            self.data["player_tags"][player] = tags

    def _update_pic(self):
        self.data["pics"] = self.waiting_list
        self.waiting_list = []

    def submit_pic(self, id, pic):
        self.waiting_list.append((id, pic))

    def check_next_turn(self):
        if len(self.waiting_list) == (self.data["players"]):
            return self.fetch_game()
        else:
            return None

    def fetch_game(self):
        self._update_pic()
        return self.data
