import psycopg2

conn = psycopg2.connect(database="test", user="postgres", password="123123", host="127.0.0.1", port="5432")
cursor = conn.cursor()
# sql = """CREATE TABLE student (
# id serial4 PRIMARY KEY,
# num int4,
# name varchar(25));"""

# sql ="INSERT INTO student (num, name) \
#                     VALUES (%s, '%s')" % \
#                     (100, 'zszxz')

sql ="""SELECT * FROM student;"""

cursor.execute(sql)
print("successfully")

cursor.execute(sql)
# 抓取
row = cursor.fetchall()
print(row)
# 事物提交
conn.commit()
# 关闭数据库连接
cursor.close()
conn.close()