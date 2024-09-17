import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import scss from './CreateNewBoard.module.scss';

const CreateNewBoard = () => {
    return (
        <section className={scss.createNewBoard}>
            <p className={scss.label}>My boards</p>

            <div className={scss.lines}>
                <div className={scss.wrapper}>
                    <p className={scss.title}>Create a new board</p>
                    <Button type="button" className={scss.button}>
                        <Icon variant="plus" className={scss.icon} />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CreateNewBoard;
