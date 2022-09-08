const App = {
    data() {
        return {
            placeholderTask: 'Напишите задачу',
            header: 'Список задач',
            inputTask: '',
            tasksList: ['Купить хлеб', 'Заправить машину', 'Забрать детей из школы', 'Сделать зарядку', 'Покормить кота', 'Позвонить Маме', 'Изучить ReactJS', 'Покормить енота', 'Позвонить Папе', 'Вызвать такси', 'Заказать ролы'],
            tasksListCompleted: ['Помыть машину', 'Полить цветы']
        }
    },
    methods: {
        addTask() {
            if (this.inputTask !== '') {
                this.tasksList.push(this.inputTask)
                this.inputTask = ''
            }
        },
        compliteTask(index) {
            this.tasksListCompleted.push(this.tasksList[index])
            this.deleteTask(index)
        },
        returnTask(index) {
            this.tasksList.push(this.tasksListCompleted[index])
            this.deleteCompliteTask(index)
        },
        deleteTask(index) {
            this.tasksList.splice(index, 1)
        },
        deleteCompliteTask(index) {
            this.tasksListCompleted.splice(index, 1)
        }
    },
    computed: {
        counterTasksList() {
            return this.tasksList.length
        },
        countertasksListCompleted() {
            return this.tasksListCompleted.length
        }
    }
}
Vue.createApp(App).mount("#app")