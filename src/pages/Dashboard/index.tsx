import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import LogoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={LogoImg} alt="Github Explore"/>
      <Title>Explore repositorios no Github.</Title>

      <Form action="">
        <input type="text" placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/40799862?s=460&u=56bad6fa65b61e0c6491f13b987c092d4797492d&v=4"
          alt="Hyago"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS e React NAtive formas!</p>
          </div>

          <FiChevronRight size={20}/>
        </a>
        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/40799862?s=460&u=56bad6fa65b61e0c6491f13b987c092d4797492d&v=4"
          alt="Hyago"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS e React NAtive formas!</p>
          </div>

          <FiChevronRight size={20}/>
        </a>
        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/40799862?s=460&u=56bad6fa65b61e0c6491f13b987c092d4797492d&v=4"
          alt="Hyago"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS e React NAtive formas!</p>
          </div>

          <FiChevronRight size={20}/>
        </a>
        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/40799862?s=460&u=56bad6fa65b61e0c6491f13b987c092d4797492d&v=4"
          alt="Hyago"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS e React NAtive formas!</p>
          </div>

          <FiChevronRight size={20}/>
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
