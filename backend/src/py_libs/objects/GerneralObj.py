from .picGameObj import PicGame


class GamingRoomDisplay:
    def __init__(self):
        self.waiting_games = {}
        self.running_games = {}
        self.wait_id = 0
        self.run_id = 0

    def create_room(self):
        self.waiting_games[self.wait_id] = GamingRoom(room_id=self.wait_id)
        self.wait_id += 1
        return self.wait_id - 1

    def join_room(self, room_id):
        if room_id in self.waiting_games:
            return self.waiting_games[room_id].join()
        else:
            raise Exception(f"Room {room_id} can not be found!")

    def start_room(self, room_id):
        if room_id in self.waiting_games:
            gameObj = self.waiting_games[room_id].start()
            self.running_games[self.run_id] = gameObj
            self.wait_id += 1
            return self.wait_id - 1

        else:
            raise Exception(f"Room {room_id} can not be found!")


class GamingRoom:
    def __init__(self, room_id, max_player=3, game_type="PicGame"):
        self.game_type = game_type
        self.max_player = max_player
        self.players = []
        self.room_id = room_id

    def join(self, user_id):
        if len(self.players) < self.max_player:
            self.players.append(user_id)
            return len(self.players)
        else:
            raise Exception(f"Room {self.room_id} has been full!")

    def start(self):
        return self._get_gameObj()

    def _get_gameObj(self):
        if self.game_type == "PicGame":
            return PicGame(self.players)
