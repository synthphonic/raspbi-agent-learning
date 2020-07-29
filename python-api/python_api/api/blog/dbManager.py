import logging.config
import pypyodbc
import collections

connection = None
cursor = None
log = logging.getLogger(__name__)

def initDbConnection():   
    global connection
    global cursor
    connection = pypyodbc.connect('DRIVER={ODBC Driver 17 for SQL Server};Server=localhost;Database=Raspi_Python;uid=sa;pwd=Shamsapura12!')  
    cursor = connection.cursor()
    log.info('>>>>Connection to Database [Raspi_Python] is Succesful<<<<<<')


def getCategories():
    sqlCommand = 'SELECT * FROM Categories'
    dataResult = executSQLCommand(sqlCommand , 'get' )
    connection.commit()
    return dataResult

def create_category(data):
    name = data.get('name')
    category_id = data.get('id')

    print("inserting .." + name)

    SQLCommand = ("""INSERT INTO Categories (CatetoryId , CatetoryName) VALUES (%d ,'%s')""" % (category_id , name))
    print("executing sql command: " + SQLCommand )
    executSQLCommand (SQLCommand , 'insert')
    connection.commit()

def getCategoryById(category_id):
    sqlCommand = 'SELECT * FROM Categories Where CatetoryId = %d ' %(category_id)
    dataResult = executSQLCommand(sqlCommand , 'get')
    connection.commit()
    return dataResult

def update_category(category_id, data):
    # category = Category.query.filter(Category.id == category_id).one()
    categoryName = data.get('name')
    # db.session.add(category)
    SQLCommand = """UPDATE Categories SET CatetoryName = '%s' WHERE CatetoryId = %d """ %(categoryName , category_id) 
    # SQLCommand = ("INSERT INTO EmployeeMaster(Name, Salary, Mobile, Designation) VALUES ('Sourabh','200000','9928486447','Computer Programmer')")
    executSQLCommand(SQLCommand , 'update')
    connection.commit()


def delete_category(category_id):
    # category = Category.query.filter(Category.id == category_id).one()
    # db.session.delete(category)
    SQLCommand = 'DELETE FROM Categories Where CatetoryId = %d '  %(category_id)
    executSQLCommand(SQLCommand , 'delete')
    connection.commit()


def executSQLCommand(sql_cmd , queryType):
    print('--> executing sql command for .....' + queryType)
    
    if(queryType.__eq__('get')  ):
        cursor.execute(sql_cmd)            
        dataResult = []
        for row in cursor:
            d = collections.OrderedDict()
            print(row)
            d['id'] = row[0]
            d['name'] = row[1]
            # print(d)
            dataResult.append(d)
        # data = cursor   
        return dataResult

    elif(queryType.__eq__('insert')):
         sql_cmd_Identity_ON = ("""SET IDENTITY_INSERT Categories ON""")
         cursor.execute(sql_cmd_Identity_ON)
         cursor.execute(sql_cmd)
         sql_cmd_Identity_OFF = ("""SET IDENTITY_INSERT Categories OFF""")
         cursor.execute(sql_cmd_Identity_OFF)
         return None
    
    else:
        cursor.execute(sql_cmd)
        return None


        
        


