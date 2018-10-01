<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
// use Symfony\Component\HttpFoundation\Response;

class WelcomeController extends AbstractController
{
    /**
     * @Route("/", name="welcome")
     */
    public function index()
    {
        // return new Response('<html><body>Hello</body></html>', Response::HTTP_OK);
        return $this->render('welcome/index.html.twig', [
            'controller_name' => 'WelcomeController',
        ]);
    }

    /**
     * @Route("/hello-page", name="hello_page")
     */
    public function hello()
    {
        return $this->render('hello_page.html.twig', [
            'some_variable_name' => 'whatever we want here'
        ]);
    }
}
