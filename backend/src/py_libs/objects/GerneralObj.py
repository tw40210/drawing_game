import picGameObj

class GamingRoomDisplay:
    def __init__(self):
        self.games={}
        self.id=0

    def create_room(self):
        self.games[self.id]=GamingRoom(room_id=self.id)
        self.id+=1
        return self.id-1
    def join_room(self, room_id):
        if room_id in self.games:
            return self.games[room_id].join()
        else:
            raise Exception(f"Room {self.room_id} can not be found!")

    def start_room(self, room_id):
        if room_id in self.games:
            return self.games[room_id].start()
        else:
            raise Exception(f"Room {self.room_id} can not be found!")

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
        return self.get_gameObj()

    def get_gameObj(self):
        if self.game_type == "PicGame":
            return picGameObj.PicGame(self.players)
